using SportsStore.Api.Models.Entities;
using SportsStore.Api.Models.Viewmodels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.CustomMapper
{
    public class CreateOrderFromOrderDto
    {
        public static Order CreateOrder(OrderDto orderDto)
        {
            var order = new Order();
            order.Address = orderDto.Address;
            order.City = orderDto.City;
            order.Email = orderDto.Email;
            order.Name = orderDto.Name;
            order.Zip = orderDto.Zip;

            if (orderDto.Lines.Any())
            {
                foreach(var line in orderDto.Lines)
                {
                    var orderLine = new OrderLine();
                    orderLine.Price = line.Product.Price;
                    orderLine.Quantity = line.Quantity;
                    orderLine.ProductId = line.Product.Id;
                    order.Lines.Add(orderLine);
                }
            }

            return order;
            
        }
    }
}
