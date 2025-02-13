import { useEffect } from "react";

const FamilyTreeComponent = () => {
  useEffect(() => {
    // Dynamically load the Balkan Family Tree script
    const script = document.createElement("script");
    script.src = "https://balkan.app/js/familytree.js"; // CDN link
    script.async = true;
    script.onload = () => {
      // Initialize Family Tree once script is loaded
      new FamilyTree(document.getElementById("tree"), {
        nodeBinding: {
          field_0: "name",
          img_0: "img", 
        },
        nodes:  [
            {
              id: 1,
              pids: [2],
              name: "Random Stray",
              gender: "female",
              img: "https://via.placeholder.com/100",
              link: "https://example.com/person1",
            },
            {
              id: 2,
              pids: [1],
              name: "Random Stray",
              gender: "male",
              img: "https://via.placeholder.com/100",
              link: "https://example.com/person2",
            },
            {
              id: 3,
              mid: 1,
              fid: 2,
              name: "Charlie",
              gender: "female",
              img: "/Charlie.jpg",
              link: "https://example.com/charlie",
            },
            {
              id: 4,
              mid: 1,
              fid: 2,
              name: "Panda",
              gender: "female",
              img: "/Panda.jpg",
              link: "https://example.com/panda",
            },
            {
              id: 5,
              pids: [6],
              name: "Doffy",
              gender: "Male",
              img: "/Doffy.jpg",
              link: "/doffy",
            },
          ],
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tree" style={{ width: "100%", height: "600px",backgroundColor:'black' }}></div>;
};

export default FamilyTreeComponent;
