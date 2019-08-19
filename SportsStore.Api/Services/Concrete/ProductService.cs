
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SportsStoreVue.Api.Data;
using SportsStoreVue.Api.Services.Interfaces;
using SportsStore.Api.Models.Viewmodels;

namespace SportsStore.Api.Services.Concrete
{
    public class ProductService : IProductService
    {
        private readonly SportsStoreContext _context;
        private readonly IMapper _mapper;

        public ProductService(SportsStoreContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<string>> GetCategories()
        {
            var categories =  await _context.Products.Select(x => x.Category)
                                                       .Distinct()
                                                    .ToListAsync();

            return categories;
        }

        public async Task<ProductDto> GetProduct(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

            var productDto = _mapper.Map<ProductDto>(product);

            return productDto;
        }

        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            var products =  await _context.Products.ToListAsync();

            var productDtos = _mapper.Map<IEnumerable<ProductDto>>(products);

            return productDtos;
        }
    }
}
