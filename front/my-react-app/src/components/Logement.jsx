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

  if (!logement) {
    return <p>Loading...</p>;
  }

  return (
    <div className="logement">
      {logement.pictures && <Slideshow images={logement.pictures} />}

      <section className="fiche-logement">
        <div className="titre">
          <div className="titreP1">
            <p>{logement.title}</p>
            <p className="location">{logement.location}</p>
          </div>

          <div className="tags-rating">
            <div className="tags">
              {logement.tags?.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="rating">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={`Photo de l’hôte ${logement.host.name}`} />
          </div>
          <div className="rating-star">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < logement.rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </section>

      <div className="collapse_column">
        <Collapse title="Description" className="collapse-logement">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements" className="collapse-logement">
          <ul>
            {logement.equipments?.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;


