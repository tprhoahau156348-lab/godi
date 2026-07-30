import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()


import WebSocket from 'ws'

const supabaseUrl = process.env.SUPABASE_URL || 'https://iyrbpxmntomucgcdgczj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cmJweG1udG9tdWNnY2RnY3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0MDY2NTIsImV4cCI6MjEwMDk4MjY1Mn0.Pivp42MU6KZ2pskvzN_Wr3kIq1zsXVRBdB_VTcaFEqk'

let supabase = null
try {
    supabase = createClient(supabaseUrl, supabaseKey, {
        auth: {
            persistSession: false
        },
        global: {
            fetch: fetch
        },
        realtime: {
            transport: WebSocket
        }
    })
    console.log("supabase conected succsesfully!!! (cloud)")
} catch(err) {
    console.log("bad supabase url or somting", err)
}

export default supabase