using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoteManagerAPI.Models
{
    public class Notes
    {
        [Key]
        [Column("note_id")]
        public int Id { get; set; }

        [Required]
        [Column("name")]
        public string Title { get; set;}

        [Required]
        [Column("content")]
        public string Description { get; set;}

        [Required]
        [Column("is_active")]
        public bool Archived { get; set; }

        [ForeignKey("Categories")]
        [Column("category_id")]
        public int CategoryId { get; set; }

    }
}
