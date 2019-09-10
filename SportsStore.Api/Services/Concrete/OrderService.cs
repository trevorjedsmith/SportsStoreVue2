using SportsStore.Api.Models.Entities;
using SportsStore.Api.Services.Interfaces;
using SportsStoreVue.Api.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.Services.Concrete
{
    public class OrderService : IOrderService
    {
        private readonly SportsStoreContext _context;

        public OrderService(SportsStoreContext context)
        {
            _context = context;
        }

        public async Task<Order> AddOrder(Order order)
        {
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
            return order;
        }
    }
}
