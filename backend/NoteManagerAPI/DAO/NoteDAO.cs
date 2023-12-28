using NoteManagerAPI.Models;

namespace NoteManagerAPI.DAO
{
    public class NoteDAO
    {
        private readonly NoteManagerDbContext _context;

        public NoteDAO(NoteManagerDbContext context)
        {
            _context = context;
        }

        
        public List<Notes> GetNotes()
        {

            return _context.Notes.ToList();

        }

        public Notes GetNote(int id)
        {

            return _context.Notes.Where(x => x.Id == id).FirstOrDefault();

        }

        public void AddNote(Notes notes)
        {

            if (_context.Notes.Where(x => x.CategoryId == notes.CategoryId).FirstOrDefault() == null){

                notes.CategoryId = 2;

            }   
            _context.Notes.Add(notes);
            _context.SaveChanges();
        }

        public void DeleteNote(int id)
        {
            var dbNoteRemove = _context.Notes.Where(x => x.Id == id).FirstOrDefault();
            _context.Notes.Remove(dbNoteRemove);
            _context.SaveChanges();
        }

        public void UpdateNote(Notes notes)
        {
            var dbNoteUpdate = _context.Notes.Find(notes.Id);
            dbNoteUpdate.Title = notes.Title;
            dbNoteUpdate.Description = notes.Description;
            dbNoteUpdate.CategoryId = notes.CategoryId;
            dbNoteUpdate.Archived = notes.Archived;
            _context.SaveChanges();
        }
    }
}
            
