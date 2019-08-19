using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SportsStore.Api.Models.Viewmodels;
using SportsStore.Api.Models;

namespace SportsStoreVue.Api.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetProducts();
        Task<ProductDto> GetProduct(int id);
        Task<IEnumerable<string>> GetCategories();
    }
}
