#!/usr/bin/env node

/**
 * Diagnostic script for Supabase connection and tables
 * Run with: node check-supabase.js
 */

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

console.log('🔍 Checking Supabase configuration...\n');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ SUPABASE_URL or SUPABASE_KEY is missing in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkConnection() {
  try {
    console.log('🔗 Testing connection to Supabase...');
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('count')
      .limit(1);

    if (projectsError) {
      console.error('❌ Failed to connect to "projects" table:');
      console.error(`   ${projectsError.message}\n`);
      console.log('💡 TIP: You likely need to run the migration script in your Supabase SQL Editor.');
    } else {
      console.log('✅ Successfully connected to "projects" table!');
    }

    console.log('\n🔗 Checking "contacts" table...');
    const { data: contacts, error: contactsError } = await supabase
      .from('contacts')
      .select('count')
      .limit(1);

    if (contactsError) {
      console.error('❌ Failed to connect to "contacts" table:');
      console.error(`   ${contactsError.message}\n`);
      console.log('💡 TIP: Run the SQL migration to create the "contacts" table and enable RLS policies.');
    } else {
      console.log('✅ Successfully connected to "contacts" table!');
      
      console.log('\n🔗 Testing public insert on "contacts"...');
      const testData = { name: 'Test', email: 'test@example.com', message: 'Diagnostic test' };
      const { data: insertData, error: insertError } = await supabase
        .from('contacts')
        .insert([testData])
        .select();

      if (insertError) {
        console.error('❌ Failed to insert into "contacts":');
        console.error(`   ${insertError.message}\n`);
        console.log('💡 TIP: This usually means Row Level Security (RLS) is blocking you. Make sure to run the "CREATE POLICY" section of the migration script.');
      } else {
        console.log('✅ Successfully tested public insert on "contacts"!');
      }
    }

  } catch (err) {
    console.error('❌ Unhandled error during diagnostics:');
    console.error(err);
  }
}

checkConnection();
