
// import NeoVis, { NEOVIS_ADVANCED_CONFIG } from 'neovis.js';
import * as NeoVis from "neovis.js"
// import NeoVis from 'neovis.js/dist/neovis.js';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    let neoViz;

    function draw() {
      var config = {
        containerId: 'viz',
        neo4j: {
          serverUrl: 'bolt://localhost:7687',
          serverUser: 'neo4j',
          serverPassword: 'movieNeovis'
        },
        visConfig: {
          nodes: {
            // size: 10,
            // shape: 'square',
            shape: 'circle',
            // shape: 'dot',
            // shape: 'ellipse',
            // color: 'red',
            font: {   // NEW
              size: 10,
              strokeWidth: 0,   //(to remove the background color inside the box , the white background comes there)
              // face: 'arial',
              // strokeWeight: 50,
              // color: "black",
            },
            widthConstraint: 96,
            shadow: true,
            widthConstraint: {  //NEW
              // minimum: 50
            },
            heightConstraint: {  //NEW
              // maximum: 100,
              // minimum: 50 (in order to give space between nodes and name)
            },
            mass: 2,  // NEW (in order to stop floating)
            scaling: { //NEW
              // min: 40,
              // max: 60
            },
            // label: {  //NEW
            //   enabled: false
            // } 
          },
          // labelHighlightBold: true, // NEW
          // margin: 2, //NEW
          // layout: {   //NEW (it will bring things into two colums and arrow will point)
          //   hierarchical: {
          //     enabled: true,
          //     direction: "UD",
          //     sortMethod: "directed",
          //   }
          // },
          edges: {
            // hoverWidth: 0,
            selectionWidth: 0,
            //   smooth: {  //New (to point every arrow in one direction)
            //     type: 'continuous',
            //     roundness: 0.15
            // },
            font: {
              size: 9,
              strokeWidth: 0,
              align: 'top'
            },
            arrows: {
              to: { enabled: true, type: 'arrow' }
              // to: { enabled: true, type: 'arrow', scaleFactor: 0.5, color: 'black' } //NEW
            },
            arrowStrikethrough: true, // NEW
            color: { // NEW (in order to change the color of ARROW)
              color: 'black', 
              // opacity: 0.5
            }
          },
        },
        labels: {
          Person: {
            label: "name",
          },
          Movie: {
            label: "title",
          },
          // Character: {
          //   label: 'pagerank',
          //   group: 'community',
          //   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          //     cypher: {
          //       value: "MATCH (n) WHERE id(n) = $id RETURN n.size"
          //     },
          //     function: {
          //       title: NeoVis.objectToTitleHtml
          //     },
          //   }
          // },
          // Dataset: {
          //   label: "Dataset Name"
          // }
        },
        relationships: {
          [NeoVis.NEOVIS_DEFAULT_CONFIG]:{  // Worked shown all relationships
            [NeoVis.NEOVIS_ADVANCED_CONFIG]:{
              function: {
                label: (rel) => rel.type
              }
            }
          }

          // ACTED_IN: {  //Worked shown only ACTED_IN relationships
          //   // label: 'type',
          //   value: 'weight',
          //   [NeoVis.NEOVIS_ADVANCED_CONFIG]:{
          //     static: {
          //       label: "ACTED_IN",
          //       color: "red",
          //       font: {
          //         // "background": "none",
          //         // "strokeWidth": "0",
          //         "size": 20,
          //         "color": "green"
          //       }

          //     }
          //   }
          // },
          
          // DIRECTED: {
          //   // label: 'type',
          //   value: 'weight',
          //   [NeoVis.NEOVIS_ADVANCED_CONFIG]:{
          //     static: {
          //       label: "ACTED_IN",
          //       color: "red",

          //     }
          //   }
          // },

          // Serve_as: {
          //   label: "property"
          // },

          // INTERACTS: {
          //   value: 'weight',
          //   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          //     function: {
          //       title: NeoVis.objectToTitleHtml
          //     },
          //   },
          //     // thickness: "weight",
          //     // caption: true

          // },

          // CONTAINS: {
          //   label: true,
          //   value: 'weight',
          //   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
          //     function: {
          //       title: function (edge) {
          //         console.log(edge);
          //       }
          //     }
          //   }
          // }

        //   physics: {
        //     forceAtlas2Based: {
        //         gravitationalConstant: -26,
        //         centralGravity: 0.005,
        //         springLength: 230,
        //         springConstant: 0.18,
        //     },
        //     maxVelocity: 146,
        //     solver: "forceAtlas2Based",
        //     timestep: 0.35,
        //     stabilization: { iterations: 150 },
        // },

        },
        // initialCypher: 'MATCH (n)-[r]->(m) RETURN n,r,m'
        // initialCypher: 'MATCH (n) RETURN n LIMIT 20'
        // initialCypher: 'MATCH (tom:Person {name: "Tom Hanks"})-[:ACTED_IN]->(tomHanksMovies) RETURN tom,tomHanksMovies'
        // initialCypher: 'MATCH (bacon:Person {name:"Kevin Bacon"})-[*1..4]-(hollywood) RETURN DISTINCT hollywood'
        // initialCypher: 'MATCH p=shortestPath((bacon:Person {name:"Kevin Bacon"})-[*]-(meg:Person {name:"Meg Ryan"})) RETURN p'
        // initialCypher: 'MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors), (coActors)-[:ACTED_IN]->(m2)<-[:ACTED_IN]-(cruise:Person {name:"Tom Cruise"}) RETURN tom, m, coActors, m2, cruise'
        // initialCypher: "MATCH (n:Movie) WITH n limit 2 OPTIONAL MATCH (n:Movie{title:'The Matrix'})-[r]-(b) RETURN n,r,b"
        // initialCypher: "MATCH (m:Movie)-[:ACTED_IN]-(a:Actor) RETURN m, a LIMIT 150"
        // initialCypher: 'MATCH (m:Movie) - [:ACTED_IN] - (a:Actor) RETURN m, a'
        // initialCypher: "match (p:Person)-[r]-(o:Movie)-[r1]-(p2:Person) RETURN * LIMIT 10"
        initialCypher: "MATCH (n: Movie) - [r] - (m) RETURN * LIMIT 10"
      };

      // neoViz = new NeoVis.default(config);
      neoViz = new NeoVis.default(config);
      neoViz.render();
      console.log("neoViz >> ", neoViz);

      neoViz.registerOnEvent("clickNode", (e) => {
        console.info("Click event ... ", e.node.raw.properties);
      });

    }

    draw();
  }, [])

  return (
    <div className="App">
      Hello
      <div id="viz"></div>
    </div>
  );
}

export default App;
