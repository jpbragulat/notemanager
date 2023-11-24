using NoteManagerAPI.Models;


namespace NoteManagerAPI.Data
{
    public class NoteManagerDbContext : DbContext
    {
        public NoteManagerDbContext(DbContextOptions<NoteManagerDbContext> options) : base(options) { }

        public DbSet<Notes> Notes { get; set; }
        public DbSet<Categories> Categories { get; set; }



    }
}
