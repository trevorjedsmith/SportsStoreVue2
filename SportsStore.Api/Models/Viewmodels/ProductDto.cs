﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using SportsStore.Api.Models.Entities;

namespace SportsStore.Api.Models.Viewmodels
{
    public class ProductDto : BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string Category { get; set; }
    }
}
