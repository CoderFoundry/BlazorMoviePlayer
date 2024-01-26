using System.ComponentModel.DataAnnotations;

namespace BlazorMoviePlayer.Models
{
    public class Movie
    {
        [Required]    
        public string? Title { get; set; }
        [Required]
        public string? Poster { get; set; }
        [Required]
        public string? Video { get; set; }
       
        
    }
}
