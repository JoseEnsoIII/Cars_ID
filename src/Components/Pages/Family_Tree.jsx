import { useEffect, useState } from "react";

const FamilyTreeComponent = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const script = document.createElement("script");
    script.src = "https://balkan.app/js/familytree.js";
    script.async = true;
    script.onload = () => {
      new FamilyTree(document.getElementById("tree"), {
        nodeBinding: {
          field_0: "name",
          img_0: "img",
        },
        nodes: [
          { id: 1, pids: [2], name: "Random Stray | Mother", gender: "female", img: "https://via.placeholder.com/100", link: "https://example.com/person1" },
          { id: 2, pids: [1], name: "Random Stray | Father", gender: "male", img: "https://via.placeholder.com/100", link: "https://example.com/person2" },
          { id: 3, mid: 1, fid: 2, name: "Charlie", gender: "female", img: "/Charlie.jpg", link: "https://example.com/charlie" },
          { id: 4, mid: 1, fid: 2, name: "Panda", gender: "female", img: "/Panda.jpg", link: "https://example.com/panda" },
          { id: 5, pids: [6], name: "Doffy ", gender: "Male", img: "/Doffy.jpg", link: "/doffy" },
        ],
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      <button
      
        onClick={() => setVisible(false)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px 15px",
          fontSize: "16px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 10,
        }}
      ><a href="/">Exit</a>
        
      </button>
      <div id="tree" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default FamilyTreeComponent;
