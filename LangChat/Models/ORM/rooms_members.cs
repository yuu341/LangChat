namespace LangChat.Models.ORM
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class rooms_members
    {
        public int id { get; set; }

        public int room_id { get; set; }

        [Required]
        [StringLength(128)]
        public string user_id { get; set; }

        public bool is_approval { get; set; }

        public bool is_admin { get; set; }

        public virtual AspNetUser AspNetUser { get; set; }

        public virtual room room { get; set; }
    }
}
