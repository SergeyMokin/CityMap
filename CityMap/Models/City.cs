using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace CityMap.Models
{
    public class City
    {
        public int id { get; set; }
        
        public string title { get; set; }
        
        public string description { get; set; }
        
        public double latitude { get; set; }
        
        public double longitude { get; set; }
        
        public string url { get; set; }
    }
}
