namespace LangChat.Models.ORM
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ChatDBModel : DbContext
    {
        public ChatDBModel()
            : base("name=ChatDBModel")
        {
        }

        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<AspNetRole> AspNetRoles { get; set; }
        public virtual DbSet<AspNetUserClaim> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogin> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUser> AspNetUsers { get; set; }
        public virtual DbSet<message> messages { get; set; }
        public virtual DbSet<room> rooms { get; set; }
        public virtual DbSet<rooms_members> rooms_members { get; set; }
        public virtual DbSet<users_rooms> users_rooms { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AspNetRole>()
                .HasMany(e => e.AspNetUsers)
                .WithMany(e => e.AspNetRoles)
                .Map(m => m.ToTable("AspNetUserRoles").MapLeftKey("RoleId").MapRightKey("UserId"));

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.AspNetUserClaims)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.AspNetUserLogins)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.messages)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.user_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.rooms_members)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.user_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<AspNetUser>()
                .HasMany(e => e.users_rooms)
                .WithRequired(e => e.AspNetUser)
                .HasForeignKey(e => e.user_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<room>()
                .HasMany(e => e.messages)
                .WithRequired(e => e.room)
                .HasForeignKey(e => e.room_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<room>()
                .HasMany(e => e.rooms_members)
                .WithRequired(e => e.room)
                .HasForeignKey(e => e.room_id)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<room>()
                .HasMany(e => e.users_rooms)
                .WithRequired(e => e.room)
                .HasForeignKey(e => e.room_id)
                .WillCascadeOnDelete(false);
        }
    }
}
