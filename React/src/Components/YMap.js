import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from 'react';
import { connect } from 'react-redux';
 
const mapState = { center: [55.76, 37.64], zoom: 3 };
 
function YMap({ cities })
{
    return (
        <div className="p-3 ymap-card">
            <YMaps>
                <Map state={mapState}>
                
                    {cities.map(city =>
                        <Placemark 
                            geometry={{
                                coordinates: [city.latitude, city.longitude]
                            }}
                            properties={{
                                hintContent: city.title,
                                balloonContent: `<div style="text-align:center"><img src="` 
                                    + city.url 
                                    + `" style="width:300px;height:225px;"><br/><p>` 
                                    + city.description 
                                    + `</p></div>`
                            }}
                        />
                    )}
            
                </Map>
            </YMaps>
        </div>
    );
}; 

const mapStateToProps = (state, props) => {
    return {
      cities: state.cities,
      props: props
    };
};

export default connect(
    mapStateToProps
)(YMap);;