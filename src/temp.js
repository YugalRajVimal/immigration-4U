const React = require("react");
const { useState } = React;

// Updated to split by ; , whitespace or comma, etc.
function chunkEmails(emailString, chunkSize = 30) {
  // Regex: split on semicolon, comma, whitespace (space, tab, newline), or any combo
  const emails = emailString
    .split(/[;, \n\r\t]+/)
    .map(e => e.trim())
    .filter(Boolean);
  const chunks = [];
  for (let i = 0; i < emails.length; i += chunkSize) {
    chunks.push(emails.slice(i, i + chunkSize));
  }
  return chunks;
}

function formatChunksForCopy(chunks) {
  return chunks
    .map((group, idx) => {
      return `Set ${idx + 1} -\n${group.join("; ")}`;
    })
    .join("\n\n");
}

const EmailChunker = () => {
  const [input, setInput] = useState("");
  const [chunks, setChunks] = useState([]);
  const [copied, setCopied] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setChunks(chunkEmails(input, 30));
    setCopied(false);
  };

  const handleCopy = () => {
    if (chunks.length === 0) return;
    const textToCopy = formatChunksForCopy(chunks);
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    React.createElement("div", { style: { maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" } },
      React.createElement("h2", null, "Email Chunker (by 30s)"),
      React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("textarea", {
          rows: 6,
          value: input,
          onChange: e => setInput(e.target.value),
          placeholder: "Paste your emails here, separated by ;, ,, space, tabs, or newlines",
          style: {
            width: "100%",
            padding: 12,
            border: "1px solid #dbeafe",
            borderRadius: 6,
            fontSize: 15,
            boxSizing: "border-box",
            marginBottom: 10
          }
        }),
        React.createElement("button", {
          type: "submit",
          style: {
            background: "#2563eb",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 5,
            border: "none",
            fontWeight: 600,
            cursor: "pointer"
          }
        }, "Split Emails")
      ),

      chunks.length > 0 && (
        React.createElement("div", { style: { marginTop: 30 } },
          React.createElement("div", {
            style: { display: "flex", alignItems: "center", marginBottom: 18, gap: 14 }
          },
            React.createElement("h3", { style: { margin: 0 } },
              "Email Sets ",
              React.createElement("span", { style: { color: "#60a5fa" } }, `(${chunks.length})`)
            ),
            React.createElement("button", {
              onClick: handleCopy,
              style: {
                background: copied ? "#22c55e" : "#2563eb",
                color: "#fff",
                padding: "7px 16px",
                borderRadius: 5,
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s"
              }
            }, copied ? "Copied!" : "Copy all sets")
          ),

          chunks.map((group, idx) =>
            React.createElement("div", {
              key: idx,
              style: {
                background: "#f8fafc",
                border: "1px solid #dbeafe",
                borderRadius: 6,
                marginBottom: 18,
                padding: 14
              }
            },
              React.createElement("div", { style: { marginBottom: 7, fontWeight: 700 } },
                `Set ${idx + 1} (${group.length} emails):`
              ),
              React.createElement("textarea", {
                readOnly: true,
                value: group.join("; "),
                style: {
                  width: "100%",
                  minHeight: "55px",
                  background: "#fff",
                  border: "1px solid #cbd5e1",
                  borderRadius: 5,
                  fontSize: 13,
                  padding: 8,
                  resize: "vertical"
                }
              })
            )
          )
        )
      )
    )
  );
};

module.exports = EmailChunker;