using SportsStore.Api.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.Services.Interfaces
{
    public interface IOrderService
    {
        Task<Order> AddOrder(Order order);
    }
}
