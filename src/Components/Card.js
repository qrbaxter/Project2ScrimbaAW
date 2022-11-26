import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
      <div className="card">
      <div className="card--img-box">
        <img className="card--img" src={props.item.imageUrl} />
      </div>
        <div className="card--infos">
        <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
        <h2 className="card--location">{props.item.location}</h2>
        <a className="card--location-url" href={props.item.googleMapsUrl}>
          View on Google Maps
        </a>

        <h3 className="card--title">{props.title}</h3>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  )
}