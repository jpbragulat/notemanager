using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NoteManagerAPI.Models
{
    public class Notes
    {
        [Key]
        [Column("note_id")]
        public int NoteId { get; set; }

        [Required]
        [Column("name")]
        public string Name { get; set;}

        [Required]
        [Column("content")]
        public string Content { get; set;}

        [Required]
        [Column("is_active")]
        public bool IsActive { get; set; }

        [ForeignKey("Categories")]
        public int CategoryId { get; set; }

    }
}
