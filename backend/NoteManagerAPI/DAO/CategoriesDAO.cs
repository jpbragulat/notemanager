﻿using NoteManagerAPI.Models;

namespace NoteManagerAPI.DAO 
{
    public class CategoriesDAO
    {
        private readonly NoteManagerDbContext _context;

        public CategoriesDAO(NoteManagerDbContext context)
        {
            _context = context;
        }

        public List<Categories> GetCategories()
        {

            return _context.Categories.ToList();

        }

        public Categories GetCategory(int id)
        {

            return _context.Categories.Where(x => x.Id == id).FirstOrDefault();

        }

        public void AddCategory(Categories category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();

        }

        public void RemoveCategory(int id)
        {
            var dbCategoryRemove = _context.Categories.Where(x => x.Id == id).FirstOrDefault();
            _context.Categories.Remove(dbCategoryRemove);
            _context.SaveChanges();
        }

        public void EditCategory(Categories category)
        {
            var dbCategoryUpdate = _context.Categories.Find(category.Id);
            dbCategoryUpdate.CategoryName = category.CategoryName;
            dbCategoryUpdate.CategoryDescription = category.CategoryDescription;
            _context.SaveChanges();
        }
    }
}
