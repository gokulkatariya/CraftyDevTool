import "./Home.css";

const Home = () => {
  const cards = [
    {
      title: "JSON Diff and Compare",
      des: "Easily compare multiple JSON objects, identify differences, and control the visibility of changes with customizable options.",
      button_1: "JSON Diff",
      button_2: "JSON Compare",
      button_3: "MULTI-JSON Compare",
      button_4: "Open Tool",
    },
    {
      title: "JSON Clear Values in Keys",
      des: "Easily clear values in JSON by their respective data types or as empty strings and view the cleared JSON directly.",
      button_1: "JSON Processing",
      button_2: " Clear JSON Values",
      button_3: "JSON Sanitization",
      button_4: "Open Tool",
    },
    {
      title: "JSON Remove Empty Keys",
      des: "Easily remove empty keys from JSON data or JSON files, with options to download the cleaned JSON and Json of Empty Keys.",
      button_1: "JSON Processing",
      button_2: " Remove Empty Keys",
      button_3: "JSON Data Cleaning",
      button_4: "Open Tool",
    },
    {
      title: "Data Deduplication",
      des: "Effortlessly clean and manage your datasets or JSON by removing duplicates by column or key. Upload files, paste JSON, or handle multiple datasets simultaneously with precision and flexibility.",
      button_1: "Remove duplicates Online Tool",
      button_2: "Deduplication Tool",
      button_3: "Data Deduplication online",
      button_4: "Open Tool",
    },
    {
      title: "JSON Keys Remover",
      des: "Effortlessly remove specific keys from JSON data based on their values or key names with our intuitive tool.",
      button_1: "JSON",
      button_2: "Data Processing",
      button_3: "JSON Management",
      button_4: "Open Tool",
    },
    {
      title: "JSON, CSV Merger",
      des: "Effortlessly merge Multiple JSON data files with deep or shallow merging for nested or top-level integration.",
      button_1: "JSON Merger",
      button_2: "Merge Json Files",
      button_3: "Merge Json Object",
      button_4: "Open Tool",
    },
    {
      title: "JSON Data Obfuscator",
      des: "Effortlessly Obfuscate, Hash, and Replace Data in Multiple JSON Objects.",
      button_1: "JSON",
      button_2: "Data Obfuscation",
      button_3: "Hashing",
      button_4: "Open Tool",
    },
    {
      title: "JSON Transformer",
      des: "Transform JSON data and Download in seconds into CSV, XML, Excel and HTML effortlessly with our updated JSONTransformer component.",
      button_1: "JSON",
      button_2: "Data Transformation",
      button_3: "XML",
      button_4: "Open Tool",
    },
    {
      title: "JSON to XML Converter",
      des: "Easily convert JSON data into XML format and download it instantly with our efficient JSON to XML Converter.",
      button_1: "JSON",
      button_2: "XML",
      button_3: "Data Conversion",
      button_4: "Open Tool",
    },
    {
      title: "JSON to CSV Converter",
      des: "Easily convert JSON data into CSV format and download it instantly with our free JSON to CSV Converter tool.",
      button_1: "JSON",
      button_2: "CSV",
      button_3: "Data Conversion",
      button_4: "Open Tool",
    },
  ];
  const buttons = [
    {
      name: "📋 All Tools",
    },
    {
      name: "🙌 Featured tools",
    },
    {
      name: "📢 Marketing",
    },
    {
      name: "🛠️ Tester",
    },
    {
      name: "⚛️ React JS",
    },
    {
      name: "🟩 Node JS",
    },
    {
      name: "📶 Data Tools",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="homehading">
          <h1>
            Find the <span>perfect tool</span> for every task
          </h1>
          <p>Elevate productivity with tools 🚀</p>
          <div className="inputBox">
            <input type="text" placeholder="Search Tool" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 45"
                width="30"
                height="30"
                fill="white"
                preserveAspectRatio="xMidYMid meet"
                className="size-25px"
              >
                <path d="M38.7 40.85 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L40.95 38.7q.45.4.45 1.025 0 .625-.5 1.125-.45.45-1.1.45-.65 0-1.1-.45Zm-19.85-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="homeButtons">
          {buttons.map((button, inx) => (
            <button key={inx}>{button.name}</button>
          ))}
        </div>
        <h1>📋 All Tools</h1>
        <div className="homecard">
          {cards.map((card, inx) => (
            <div key={inx} className="card">
              <div className="cardhead">
                <h3>{card.title}</h3>
                <p>{card.des}</p>
              </div>
              <div className="cardfooter">
                <div className="footer-1">
                  <button>{card.button_1}</button>
                  <button>{card.button_2}</button>
                  <button>{card.button_3}</button>
                </div>
                <div className="footer-2">
                  <button>{card.button_4}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
