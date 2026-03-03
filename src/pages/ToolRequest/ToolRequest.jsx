import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ToolRequest() {
  const user = useSelector((s) => s.auth.user);
  const isLogged = useSelector((s) => s.auth.isLogged);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [similar, setSimilar] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isLogged) {
      navigate("/signin");
    }
  }, [isLogged, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // client-side validation
    const newErrors = {};
    if (!name || name.trim().length === 0) newErrors.name = "Please enter a name.";
    if (!description || description.trim().length === 0) newErrors.description = "Please enter a description.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (!isLogged) {
      // extra guard — redirect to signin
      navigate("/signin");
      return;
    }

    setSubmitting(true);
    try {
      // For now: log request. Replace with API or Firestore call if needed.
      const payload = {
        name,
        description,
        similar,
        requestedBy: user?.email || null,
        requestedAt: new Date().toISOString(),
      };
      // Persist to Firestore 'orders' collection
      await addDoc(collection(db, "orders"), {
        ...payload,
        userId: user?.uid || null,
        createdAt: serverTimestamp(),
      });
      console.log("Tool request submitted and saved:", payload);
      setName("");
      setDescription("");
      setSimilar("");
      alert("Request submitted — thank you!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pt-20">
      <h1 className="text-2xl font-bold text-indigo-900 flex items-center gap-2 mb-6">
        <span className="text-2xl">💡</span> Request a tool
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">1. Enter the name of the tool (e.g. CSS Clip Path Generator)</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            aria-invalid={errors.name ? "true" : "false"}
            className={`w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-300 ring-red-100' : 'border-gray-200 focus:ring-indigo-200'}`}
          />
          {errors.name && <p className="text-sm text-red-600 mt-2">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">2. Describe the tool you want</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows={7}
            aria-invalid={errors.description ? "true" : "false"}
            className={`w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.description ? 'border-red-300 ring-red-100' : 'border-gray-200 focus:ring-indigo-200'}`}
          />
          {errors.description && <p className="text-sm text-red-600 mt-2">{errors.description}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">3. Enter the URL of a similar tool (optional)</label>
          <input
            value={similar}
            onChange={(e) => setSimilar(e.target.value)}
            placeholder="Similar Tool URL"
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            disabled={submitting || !name.trim() || !description.trim() || !isLogged}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white ${ (submitting || !name.trim() || !description.trim() || !isLogged) ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            ➤ Submit
          </button>
        </div>
      </form>
    </div>
  );
}
