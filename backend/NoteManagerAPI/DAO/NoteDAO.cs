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

        public void AddNote(Notes notes)
        {
            _context.Notes.Add(notes);
            _context.SaveChanges();
        }

        public void DeleteNote(int id)
        {
            var dbNoteRemove = _context.Notes.Where(x => x.NoteId == id).FirstOrDefault();
            _context.Notes.Remove(dbNoteRemove);
            _context.SaveChanges();
        }

        public void UpdateNote(Notes notes)
        {
            var dbNoteUpdate = _context.Notes.Find(notes.NoteId);
            dbNoteUpdate.Name = notes.Name;
            dbNoteUpdate.Content = notes.Content;
            dbNoteUpdate.CategoryId = notes.CategoryId;
            dbNoteUpdate.IsActive = notes.IsActive;
            _context.SaveChanges();
        }
    }
}
            
