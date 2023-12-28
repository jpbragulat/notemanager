using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteManagerAPI.Models;
using NoteManagerAPI.DAO;
using System.Web.Http;
using System.Net;

namespace NoteManagerAPI.Controllers
{

    [ApiController]
    [Route("api/v1/categories")]
    public class CategoriesController : Controller
    {
        private readonly NoteManagerDbContext _context;

        public CategoriesController(NoteManagerDbContext context)
        {
            _context = context;
        }

        [Route("getCategories")]
        [HttpGet]
        public List<Categories> GetCategories()
        {
            
             var categoryDAO = new CategoriesDAO(_context);
             return categoryDAO.GetCategories().ToList();
            
        }

        [HttpGet("getCategories/{id}")]
        public Categories GetCategory(int id)
        {

            var categoryDAO = new CategoriesDAO(_context);
            return categoryDAO.GetCategory(id);

        }


        [Route("addCategories")]
        [HttpPost]
        public HttpStatusCode AddCategories(Categories categories)
        {
            try
            {
                var categoryDAO = new CategoriesDAO(_context);
                categoryDAO.AddCategory(categories);
                return HttpStatusCode.OK;
            }
            catch
            {
                return HttpStatusCode.InternalServerError;
            }

        }

        [Route("delCategories/{id}")]
        [HttpDelete]
        public HttpStatusCode DeleteCategories(int id)
        {
            try
            {
                var categoryDAO = new CategoriesDAO(_context);
                categoryDAO.RemoveCategory(id);
                return HttpStatusCode.OK;
            }
            catch {
                return HttpStatusCode.InternalServerError; 
            }
        }

        [Route("editCategories")]
        [HttpPut]
        public HttpStatusCode PutCategories(Categories categories)
        {
            try
            {
                var categoryDAO = new CategoriesDAO(_context);
                categoryDAO.EditCategory(categories);
                return HttpStatusCode.OK;
            }
            catch
            {
                return HttpStatusCode.InternalServerError;
            }

        }


        









    }
}
