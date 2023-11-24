using Microsoft.AspNetCore.Mvc;
using NoteManagerAPI.DAO;
using NoteManagerAPI.Models;
using System.Net;

namespace NoteManagerAPI.Controllers
{
    [ApiController]
    [Route("api/v1/notes")]
    public class NoteController : ControllerBase
    {
        private readonly NoteManagerDbContext _context;

        public NoteController(NoteManagerDbContext context)
        {
            _context = context;
        }

        [HttpGet("getNotes")]
        public List<Notes> GetNotes() { 
            
            var noteDAO = new NoteDAO(_context);
            return noteDAO.GetNotes();
        
        }

        [HttpGet("getNote/{id}")]
        public Notes GetNote(int id)
        {

            var noteDAO = new NoteDAO(_context);
            return noteDAO.GetNote(id);

        }


        [HttpPost("addNotes")]
        public HttpStatusCode AddNote(Notes notes)
        {
            try
            {
                var noteDAO = new NoteDAO(_context);
                noteDAO.AddNote(notes);
                return HttpStatusCode.OK;
            }
            catch
            {
                return HttpStatusCode.InternalServerError;
            }
        }

        [HttpDelete("delNotes")]
        public HttpStatusCode DeleteNote(int id)
        {
            try
            {
                var noteDAO = new NoteDAO(_context);
                noteDAO.DeleteNote(id); 
                return HttpStatusCode.OK;
            }
            catch { 
                return HttpStatusCode.InternalServerError; 
            }
            
        }

        [HttpPut("editNotes")]
        public HttpStatusCode EditNote(Notes requestNote)
        {
            try
            {
                var notesDAO = new NoteDAO(_context);
                notesDAO.UpdateNote(requestNote);

                return HttpStatusCode.OK;
            }
            catch
            {
                return HttpStatusCode.InternalServerError;
            }
        }

      
        
    }
}