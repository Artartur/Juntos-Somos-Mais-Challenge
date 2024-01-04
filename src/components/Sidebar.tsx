import { useState } from "react";
import "../styles/sidebar.scss";

export default function Sidebar({
  onSelectStateChange,
  selectedStates,
}: {
  onSelectStateChange: (selectedState: string[]) => void;
  selectedStates: string[];
}) {
  const [showAllStates, setShowAllStates] = useState(false);

  const visibleStates = 5;

  const handleShowAllStates = () => {
    setShowAllStates(!showAllStates);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      return onSelectStateChange([...selectedStates, value]);
    }
    const newSelectedStates = selectedStates.filter(
      (selectedState) => selectedState !== value,
    );
    return onSelectStateChange(newSelectedStates);
  };

  const states = [
    "santa catarina",
    "roraima",
    "paraná",
    "tocantins",
    "goiás",
    "espírito santo",
    "minas gerais",
    "mato grosso",
    "mato grosso do sul",
    "acre",
    "pará",
    "amapá",
    "distrito federal",
    "rio de janeiro",
    "alagoas",
    "paraíba",
    "pernambuco",
    "bahia",
    "ceará",
    "maranhão",
    "piauí",
    "rio grande do sul",
    "amazonas",
    "rio grande do norte",
    "rondônia",
    "são paulo",
    "sergipe",
  ];

  const visibleStatesList = showAllStates
    ? states
    : states.slice(0, visibleStates);

  return (
    <aside
      className={
        !showAllStates ? "sidebar__container" : "sidebar__container-large"
      }
    >
      <div className="sidebar__container-state">
        <h3>Per state</h3>
        <div className="sidebar__container-state-group">
          {visibleStatesList.map((result, index) => (
            <div
              key={index}
              className="sidebar__container--state-group-checkbox"
            >
              <input
                checked={selectedStates.includes(result)}
                onChange={handleInputChange}
                type="checkbox"
                value={result}
                id={`checkbox-${index}`}
              />
              <label htmlFor={`checkbox-${index}`}>{result}</label>
            </div>
          ))}
        </div>

        {states.length > visibleStates && (
          <p
            className="sidebar__container-state-moreOptions"
            onClick={handleShowAllStates}
          >
            {showAllStates ? "See less" : "See more"}
          </p>
        )}
      </div>
    </aside>
  );
}
