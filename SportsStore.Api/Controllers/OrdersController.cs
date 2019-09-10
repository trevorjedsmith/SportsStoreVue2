using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Api.CustomMapper;
using SportsStore.Api.Models.Viewmodels;
using SportsStore.Api.Services.Interfaces;
using SportsStoreVue.Api.Services.Interfaces;

namespace SportsStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(OrderDto orderDto)
        {
            if (orderDto == null)
                return BadRequest();

            var order = CreateOrderFromOrderDto.CreateOrder(orderDto);

            if (order == null)
                return BadRequest();

            var orderComplete = await _orderService.AddOrder(order);

            return Ok(orderComplete);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
