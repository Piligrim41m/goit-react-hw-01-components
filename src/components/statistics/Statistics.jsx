import PropTypes from "prop-types"
import css from "./Statistics.module.css"
import {getRandomColor} from "../../utilites/randomColor"

export function Statistics({title=null, stats}) {
    return (<section className={css.statistics}>
        {title !== null && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
                return (
                <li className={css.item}
                    key={id}
                    style={{ backgroundColor: getRandomColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
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