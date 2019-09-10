using SportsStore.Api.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.Models.Viewmodels
{
    public class OrderDto: BaseEntity
    {
        public string Address { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Zip { get; set; }
        public OrderLineDto[] Lines { get; set; }

    }

    public class OrderLineDto
    {
        public ProductDto Product { get; set; }
        public int Quantity { get; set; }
    }
}
