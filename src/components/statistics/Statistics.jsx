import PropTypes from "prop-types"
import "./Statistics.css"
import {getRandomColor} from "../../utilites/randomColor"

export function Statistics({title=null, stats}) {
    return (<section className="statistics">
        {title !== null && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => {
                return (
                <li className="item"
                    key={id}
                    style={{ backgroundColor: getRandomColor() }}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
                 </li>)
            })}
    
  </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    })),
}