import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";

export default function Orders() {
  const isLogged = useSelector((s) => s.auth.isLogged);
  const user = useSelector((s) => s.auth.user);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLogged) {
      navigate("/signin");
      return;
    }

    setLoading(true);
    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", user?.uid || null),
        orderBy("createdAt", "desc")
      );

      const unsub = onSnapshot(
        q,
        (snapshot) => {
          const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setOrders(items);
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Failed to load orders");
          setLoading(false);
        }
      );

      return () => unsub();
    } catch (err) {
      console.error(err);
      setError("Failed to initialize orders listener");
      setLoading(false);
    }
  }, [isLogged, navigate, user]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 pt-20">
      <h2 className="text-2xl font-bold text-indigo-800 flex items-center gap-3 mb-6">
        <span className="text-2xl">📦</span>
        Orders
      </h2>

      <div className="bg-white border border-gray-100 rounded p-6">
        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-gray-600 p-8">No orders found.</div>
        ) : (
          <ul className="space-y-4">
            {orders.map((o) => (
              <li key={o.id} className="p-4 border rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{o.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{o.description}</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {o.createdAt && o.createdAt.toDate
                      ? new Date(o.createdAt.toDate()).toLocaleString()
                      : o.requestedAt || ""}
                  </div>
                </div>
                {o.similar && (
                  <div className="mt-3 text-sm">
                    <a href={o.similar} target="_blank" rel="noreferrer" className="text-indigo-600">
                      Similar tool link
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
