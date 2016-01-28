namespace LangChat.Models.ORM
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class message
    {
        public int id { get; set; }

        public int room_id { get; set; }

        public int? icon_id { get; set; }

        [Required]
        [StringLength(128)]
        public string user_id { get; set; }

        [Column("message", TypeName = "ntext")]
        [Required]
        public string message1 { get; set; }

        public DateTime created { get; set; }

        public DateTime? modified { get; set; }

        public DateTime? deleted { get; set; }

        public virtual AspNetUser AspNetUser { get; set; }

        public virtual room room { get; set; }
    }
}
