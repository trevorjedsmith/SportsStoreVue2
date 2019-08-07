using Microsoft.EntityFrameworkCore;
using SportsStore.Api.Models.Entities;


namespace SportsStoreVue.Api.Data
{
    public class SportsStoreContext : DbContext
    {
        public SportsStoreContext(DbContextOptions<SportsStoreContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }

    }
}
