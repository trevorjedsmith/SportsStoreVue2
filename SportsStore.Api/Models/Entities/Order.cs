using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.Models.Entities
{
    public class Order: BaseEntity
    {
        public string Address { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Zip { get; set; }
        public List<OrderLine> Lines { get; set; } = new List<OrderLine>();
    }
}
