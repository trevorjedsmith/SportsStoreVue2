using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SportsStore.Api.Models.Entities;


namespace SportsStoreVue.Api.Data
{
    // We are using token based identity with jwt tokens so we need to inherit from IdentityDbContext<IdentityUSer> as opposed to DbContext
    // Then if we do a migration this inheritance of IdentityDbContext will scaffold out the correct security tables
    public class SportsStoreContext : IdentityDbContext<IdentityUser>
    {
        public SportsStoreContext(DbContextOptions<SportsStoreContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }

    }
}
