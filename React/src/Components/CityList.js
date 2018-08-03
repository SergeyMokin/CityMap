import React from 'react';
import { connect } from 'react-redux';
import City from './City';

function CityList({ cities, props }) {
  if(!cities.length) {
    return (
      <div>
        No cities
      </div>
    )
  }
  return (
    <div className="card-columns inline p-3">
      {cities.map(city => 
        {
          return (
                <div className="card bg-dark text-left card-resizer m-1" key={city.id} onClick={() => props.handler(city)}>
                  <img className="card-img-top img-card-size" src={
                    city.url == "https://www.votpusk.ru/story/edit/foto/large/28959.jpg" 
                      ? "https://www.babyloncitytours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg" 
                      : city.url
                    } alt="Card image"/>
                  <div className="card-img-overlay">
                    <h4 className="card-title">{city.title}</h4>
                  </div>
                </div>
          )
        })}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    cities: state.cities,
    props: props
  };
};

export default connect(
  mapStateToProps
)(CityList);