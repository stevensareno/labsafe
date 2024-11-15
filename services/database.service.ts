import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;

  constructor() {}

  async openDatabase() {
    try {
      // Create a connection to the database
      this.db = await CapacitorSQLite.createConnection({
        database: 'chinook',
        version: 1,
        encrypted: false,
        mode: 'no-encryption',
        tables: [] // Add schema if needed for web support
      });

      // Open the connection
      await this.db.open();
    } catch (error) {
      console.error('Failed to open the database:', error);
    }
  }

  async getTracks() {
    try {
      if (this.db) {
        // Query to retrieve all tracks from the database
        const query = 'SELECT * FROM tracks';
        const result = await this.db.query(query);

        // Return the track data
        return result.values || [];
      }
      return [];
    } catch (error) {
      console.error('Error querying tracks:', error);
      return [];
    }
  }

  async closeDatabase() {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }
}
