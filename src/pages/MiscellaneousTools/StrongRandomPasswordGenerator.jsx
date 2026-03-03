import { useState, useEffect } from "react";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import CommentsSection from "../../components/CommentsSection";
import BrowserExtensionBanner from "../../components/BrowserExtensionBanner";
import SimilarTools from "../../components/SimilarTools";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

const CONFUSING = "il1Lo0O";
const AMBIGUOUS = "{}[]()/\\'\"`~,;:.<>";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    excludeConfusing: false,
    excludeAmbiguous: false,
  });

  const generatePassword = () => {
    let charset = "";

    if (options.lowercase) charset += LOWERCASE;
    if (options.uppercase) charset += UPPERCASE;
    if (options.numbers) charset += NUMBERS;
    if (options.symbols) charset += SYMBOLS;

    if (options.excludeConfusing) {
      charset = charset
        .split("")
        .filter((c) => !CONFUSING.includes(c))
        .join("");
    }

    if (options.excludeAmbiguous) {
      charset = charset
        .split("")
        .filter((c) => !AMBIGUOUS.includes(c))
        .join("");
    }

    if (!charset) return;

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(result);
    calculateStrength(result);
  };

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    setStrength(score);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    if (password) calculateStrength(password);
  }, [length]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 mt-10">
        {/* ===== Password Generator Card ===== */}
        <div className="max-w-5xl mx-auto p-8">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-indigo-50 text-indigo-600">
              🔒
            </span>
            Strong Random Password Generator
          </h2>

          {/* Length + Strength */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
            {/* Length */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password Length
              </label>
              <select
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-36 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {[8, 10, 12, 14, 16, 20, 24, 32].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Strength */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password Strength
              </label>
              <div className="flex gap-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-7 rounded-sm ${
                      i < strength ? "bg-green-400" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-8 text-sm text-gray-700">
            {[
              ["lowercase", "Include lowercase letters", "a b c d ..."],
              ["uppercase", "Include uppercase letters", "A B C D ..."],
              ["numbers", "Include numbers", "1 2 3 4 ..."],
              ["symbols", "Include symbols", "! # $ % & * ..."],
              [
                "excludeConfusing",
                "Exclude confusing characters",
                "i l 1 L o 0 O",
              ],
              [
                "excludeAmbiguous",
                "Exclude ambiguous characters",
                "{ } [ ] ( ) / \\",
              ],
            ].map(([key, label, example]) => (
              <label
                key={key}
                className="flex items-start gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={options[key]}
                  onChange={() =>
                    setOptions({
                      ...options,
                      [key]: !options[key],
                    })
                  }
                  className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>
                  <span className="font-medium">{label}</span>
                  <span className="text-gray-400 ml-2">→ {example}</span>
                </span>
              </label>
            ))}
          </div>

          {/* Generate + Output */}
          <div className="flex flex-wrap gap-3 items-center">
            <button
              onClick={generatePassword}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
            >
              🔒 Generate Password
            </button>

            <input
              value={password}
              readOnly
              placeholder="Password"
              className="flex-1 min-w-55 rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none"
            />

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-5 py-3 rounded-xl text-sm font-medium hover:bg-indigo-200 transition"
            >
              📋 Copy
            </button>
          </div>
        </div>
        {/* ===== Extra Sections (Centered with same max-width) ===== */}
        <div className="max-w-5xl mx-auto p-8 space-y-8">
          <CommentsSection toolId="strong-random-password-generator" />
          <BuyMeACoffee />
          <SimilarTools />
          <BrowserExtensionBanner />
        </div>

        {/* ===== Information Section ===== */}
        <div className="max-w-5xl mx-auto p-8 bg-white tracking-wider mt-8">
          <h3 className="font-space-grotesk font-bold text-2xl">
            What is Online Strong Random Password Generator
          </h3>
          <p className="font-manrope pt-6">
            Strong Random Password Generator is a free online tool for
            generating strong random passwords in which you can set the length
            and character set of the password. It works like a password
            generator and password strength meter at the same time. People
            generally use weak passwords that includes their names, surnames,
            birthdays, and other personal information. The reason is to remember
            it easily but with advanced password hacking methods, it makes it
            easier for hackers to crack the passwords within seconds. It is very
            crucial to have a strong password to protect your account especially
            if you are not using 2FA (2 Factor Authentication) like SMS or email
            verification.
          </p>

          <p className="font-manrope pt-4">
            Here you can see an easy versus strong password together. It is even
            visually clear that the strong password is much more secure than the
            easy password.
          </p>

          <div className="my-8 p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-100 rounded border-2 border-red-300">
                <p className="font-semibold text-red-700 mb-2">
                  Weak Password:
                </p>
                <p className="font-mono text-lg">john1990</p>
              </div>
              <div className="p-4 bg-green-100 rounded border-2 border-green-300">
                <p className="font-semibold text-green-700 mb-2">
                  Strong Password:
                </p>
                <p className="font-mono text-lg">8K#mT9$pL2@nQ5x</p>
              </div>
            </div>
          </div>

          <div className="font-manrope space-y-4">
            <p>
              Hackers are using different methods to crack passwords. Most
              widely used methods are brute force, dictionary attacks and
              rainbow table attacks. If you want to protect your account from
              these attacks, you need to use strong passwords.
            </p>

            <p>
              <strong>Brute Force Attack:</strong> This is a method that
              iterates over all possible passwords by using character sets and
              checks if they are correct. If the website that you use the
              password for is not secure and does not have protection for
              multiple login attempts, hackers may use this method. For
              protecting yourself from such attacks, you need to use different
              character types like lowercase letters, uppercase letters,
              numbers, and special characters. If diversity of the characters
              used in the password is high and total number of characters in the
              character set is big, it becomes a time and energy consuming
              process for the attacker and it becomes difficult to crack the
              password.
            </p>

            <p>
              <strong>Dictionary and Rainbow Table Attacks:</strong> These
              methods are very close to each other. In both methods, the
              attacker tries to guess the password by using a dictionary of
              words and common password list. The difference is that in the
              dictionary attack, the attacker uses a common password list and
              tries to login to your account with these passwords
              programmatically. In rainbow table attack, the attacker has
              already obtained the database of the credentials stored. In
              general, passwords are stored as hashes like MD5, SHA256 or
              SHA512. Rainbow tables contain common passwords and their hash
              equivalents. The hacker tries to guess the password by using the
              hash values of the passwords. For protecting your account from
              these attacks, you need to avoid using words, common patterns,
              consecutive numbers, and personal information in your passwords.
            </p>

            <p>
              <strong>Social Engineering:</strong> Another method that is not
              stated above is social engineering. It is a technique used by
              people who know your identity and want to exploit your account.
              Attackers make a deep study on search engines and social media
              sites about the victim and gather as much information as possible
              like the name of your mother or father, the name of your pet, your
              birthdate, your birthplace, the schools you attended, or the
              companies you worked for. The attacker then uses this information
              to try to guess the password. There are tools that take all this
              information as input and make combinations by using them to narrow
              down the possibilities about your password. Therefore, using
              anything related to yourself in your passwords is not a good idea.
            </p>

            <p>
              <strong>Phishing:</strong> It is important to mention phishing
              when talking about passwords and password creation. It is a
              technique used by hackers to steal your personal information
              including passwords by using fake websites. Thus, it is very
              important to check the landing URL before clicking any link. If
              you want to navigate an important link, it is better to use a
              bookmark instead of clicking a link from an unknown website or
              email.
            </p>

            <p>
              It is very important to use 2FA (2-factor authentication) if
              possible as it is nearly impossible for someone to login to your
              account even if they know your password. In addition to SMS, voice
              or email verification, there are many authenticator apps like
              Google Authenticator, Authy, or Microsoft Authenticator for
              protecting you from such malicious activities.
            </p>

            <p>
              For protecting your personal accounts, it is advised to use at
              least 2 different email accounts for password verification. One
              can be used for more important accounts and the other can be used
              for less important ones or for websites which look risky in terms
              of security.
            </p>

            <p>
              In all cases, you will need a secure password generator to create
              your new password in a trustworthy environment. Strong Random
              Password Generator is a free tool for this purpose which works in
              your browser only. This protects your newly generated password
              from network sniffing and other attacks.
            </p>
          </div>

          <h3 className="font-space-grotesk text-2xl font-bold mt-12">
            How to use Online Strong Random Password Generator?
          </h3>

          <div className="font-manrope pt-6">
            <p>You can create your strong password by following these steps:</p>
            <ol className="list-decimal list-inside mt-4 space-y-3">
              <li>
                Set your desired password length using the length slider or
                input field. Longer passwords are generally more secure.
              </li>
              <li>
                Select the character types you want to include in your password:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Lowercase letters (a-z)</li>
                  <li>Uppercase letters (A-Z)</li>
                  <li>Numbers (0-9)</li>
                  <li>Special characters (!@#$%^&*)</li>
                </ul>
              </li>
              <li>
                Click the "Generate Password" button to create a new random
                password based on your settings.
              </li>
              <li>
                Review the generated password and check the password strength
                indicator to ensure it meets your security requirements.
              </li>
              <li>
                Click the "Copy" button to copy the password to your clipboard,
                then paste it where needed.
              </li>
              <li>
                You can regenerate as many times as you want until you get a
                password you're satisfied with.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
