using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SportsStore.Api.Models.Viewmodels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SportsStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController:Controller
    {       
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;
        public TokenController(SignInManager<IdentityUser> signInManager,
        UserManager<IdentityUser> userManager, IConfiguration configuration)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _configuration = configuration;
        }

        [HttpPost("gettoken")]

        public async Task<IActionResult> GetToken(LoginViewModel lvm)
        {
            var errorMessage = "Invalid e-mail address and/or password";

            if (!ModelState.IsValid)
                return BadRequest(errorMessage);

            var user = await _userManager.FindByEmailAsync(lvm.Username);

            if (user == null)
                return BadRequest(errorMessage);

            if (await _userManager.IsLockedOutAsync(user))
                return BadRequest(errorMessage);

            var result = await _signInManager.PasswordSignInAsync(user,lvm.Password, true, true);

            if (!result.Succeeded)
                return BadRequest(errorMessage);

            // We need the user to build up the mandatory claims object the token requires
            var token = GenerateToken(user);
            return Ok(token);
        }

        internal TokenViewModel GenerateToken(IdentityUser user)
        {
            // Claims required by the token
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            // The secret key comes from our config
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes
            (_configuration["Authentication:JwtKey"]));

            // The encrypted creds using HmacSHA256
            var creds = new SigningCredentials(key,
            SecurityAlgorithms.HmacSha256);

            // Our expires for the token otherwise default will be used
            var expires = DateTime.Now.AddDays(Convert.ToDouble
            (_configuration["Authentication:JwtExpireDays"]));

            var token = new JwtSecurityToken(
            _configuration["Authentication:JwtIssuer"],
            _configuration["Authentication:JwtAudience"],
            claims,
            expires: expires,
            signingCredentials: creds
            );

            return new TokenViewModel
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                AccessTokenExpiration = expires,
                Success = true
            };
        }
    }
}
