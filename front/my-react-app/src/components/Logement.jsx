import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow/Slideshow";
import Collapse from "./Collapse";
import "./Logement.css";

function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (!response.ok) {
          navigate("/404");
          return;
        }

        const data = await response.json();
        setLogement(data);
      } catch (error) {
        console.error("Error fetching logement data:", error);
        navigate("/404");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (logement === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      {logement.pictures && <Slideshow images={logement.pictures} />}
      <div className="titre">
        <div className="titreP1">
          <div>
            <p>{logement.title}</p>
            <p className="location">{logement.location}</p>
          </div>
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={`${logement.host.name}`} />
          </div>
        </div>
      </div>
      <div className="tags-rating">
        <div className="tags">
          {logement.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="rating">
          {Array.from({ length: 5 }, (v, i) => (
            <span key={i} className={i < logement.rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
      </div>
      <div className="details">
        <Collapse title="Description" className="collapse-logement">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements" className="collapse-logement">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
