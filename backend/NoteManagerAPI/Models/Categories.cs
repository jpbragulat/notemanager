using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoteManagerAPI.Models
{
    public class Categories
    {
        [Key]
        [Column("category_id")]
        public int Id { get; set; }

        [Required]
        [Column("category_name")]
        public string CategoryName { get; set;}

        [Required]
        [Column("category_description")]
        public string CategoryDescription { get; set;}
    }
}
