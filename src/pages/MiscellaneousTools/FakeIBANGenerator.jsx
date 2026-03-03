import { useState } from "react";
import { generateIBAN, COUNTRIES } from "../../utils/ibanUtils";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import SimilarTools from "../../components/SimilarTools";

export default function FakeIbanGenerator() {
  const [country, setCountry] = useState("GB");
  const [count, setCount] = useState(5);
  const [ibans, setIbans] = useState([]);

  const generate = () => {
    const list = Array.from({ length: count }, () => generateIBAN(country));
    setIbans(list);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-32 mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
        Fake IBAN Generator
      </h2>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          {Object.entries(COUNTRIES).map(([code, name]) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>

        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border rounded-lg px-4 py-3"
        >
          {[1, 5, 10, 20].map((n) => (
            <option key={n} value={n}>
              {n} IBANs
            </option>
          ))}
        </select>

        <button
          onClick={generate}
          className="bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700"
        >
          Generate
        </button>
      </div>

      {/* Results */}
      {ibans.length > 0 && (
        <div className="bg-white rounded-xl shadow p-5 space-y-3">
          {ibans.map((iban, idx) => (
            <div
              key={idx}
              className="font-mono text-sm border rounded-md px-4 py-2 bg-gray-50"
            >
              {iban}
            </div>
          ))}
        </div>
      )}
      {/* ===== Extra Sections (Below, Centered) ===== */}
      <div className="flex flex-col space-y-0 mt-32">
        <CommentsSection toolId="fake-iban-generator" />
        <BuyMeACoffee />
        <SimilarTools />
        <BrowserExtensionBanner />
        <div />
      </div>
      <div className="max-w-5xl mx-auto p-8 bg-white tracking-wider">
        <h3 className="font-space-grotesk font-bold text-2xl">
          What is Online Fake IBAN Generator ?
        </h3>
        <p className="font-manrope pt-6">
          Fake IBAN Generator is a{" "}
          <strong>
            free online tool for generating valid fake IBANs for testing
            purposes{" "}
          </strong>
          It allows you to select a specific country and generate multiple fake
          IBANs at once. These generated IBANs follow the correct format and
          structure for each country, including the country code, check digits,
          and proper length, but they are completely fictional and not linked to
          any real bank accounts.
        </p>{" "}
        <br />
        <p>
          The IBAN system is used in many countries around the world to identify
          bank accounts for international transactions. Each country has its own
          specific format requirements for IBANs, including length and
          structure.
        </p>
        <br />
        <h3 className="font-space-grotesk font-bold text-2xl">
          What is Online Fake IBAN Generator ?
        </h3>
        <br />
        <p>
          IBAN stands for International Bank Account Number. It is an
          internationally agreed system of identifying bank accounts across
          national borders to facilitate the communication and processing of
          cross-border transactions. An IBAN consists of up to 34 alphanumeric
          characters, including:
        </p>{" "}
        <div className="font-manrope pt-6">
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              A two-letter country code (e.g., "GB" for the United Kingdom)
            </li>
            <li>Two check digits</li>
            <li>
              A Basic Bank Account Number (BBAN) that includes bank and branch
              identifiers and the account number
            </li>
          </ul>
          <br />
          <p>
            The length of an IBAN varies by country, with each country having
            its own specific format. For example, IBANs from Germany have 22
            characters, while those from the UK have 22 characters, and those
            from France have 27 characters.
          </p>{" "}
          <br />
          <h3 className="font-space-grotesk text-2xl font-bold">
            When to use Random IBAN Generator?
          </h3>
          <div className="font-manrope pt-6">
            <p>Random IBANs are useful in several scenarios:</p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>
                Software development and testing of financial applications
              </li>
              <br />
              <li>UI/UX design mockups for banking or fintech applications</li>
              <br />
              <li>Educational purposes to demonstrate IBAN formats</li>
              <br />
              <li>Data anonymization when sharing examples</li>
              <br />
              <li>
                Test environments where real banking data cannot be used .{" "}
              </li>
            </ol>
          </div>
          <br />
          <img src="images/iban-generator.png" alt="IBAN Generator" />
          <br />
          <p>
            IBAN generator is available for more than 35+ countries including;
            Albania, Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech
            Republic, Denmark, Egypt, Estonia, Finland, France, Germany, Greece,
            Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta,
            Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain,
            Sweden, United Kingdom, Switzerland, Norway, Iceland, Saudi Arabia,
            Turkey, and United Arab Emirates.
          </p>
          <br />
          <p>
            {" "}
            <u>
              <b>Important Note: </b>{" "}
            </u>{" "}
            The IBANs generated by this tool are completely fictional and should
            never be used for actual financial transactions. They are intended
            for testing and educational purposes only.
          </p>{" "}
          <br />
          <h3 className="font-space-grotesk text-2xl font-bold">
            How to use Random IBAN Generator?
          </h3>
          <div className="font-manrope pt-6">
            <p>Using the Fake IBAN Generator is simple:</p>
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li>
                Select the country for which you want to generate IBANs from the
                dropdown menu
              </li>
              <br />
              <li>
                Choose the number of IBANs you want to generate (1, 5, 10, 25,
                50, or 100)
              </li>
              <br />
              <li>Click the "Generate" button</li>
              <br />
              <li>The generated IBANs will appear in the results section</li>
              <br />
              <li>
                You can copy individual IBANs or all of them at once using the
                provided copy buttons .{" "}
              </li>
            </ol>
            <br />
            <p>
              All generation is done client-side in your browser, and no data is
              sent to any server. This ensures that your test data remains
              private and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
