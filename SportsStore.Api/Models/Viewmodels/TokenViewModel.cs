using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore.Api.Models.Viewmodels
{
    public class TokenViewModel
    {
        public string AccessToken { get; set; }
        public DateTime AccessTokenExpiration { get; set; }
        public bool Success { get; set; }
    }
}
