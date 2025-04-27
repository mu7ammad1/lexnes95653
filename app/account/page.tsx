<<<<<<< HEAD
import AccountForm from "./account-form";

import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AccountForm user={user} />;
=======
import AccountForm from "./account-form";

import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <AccountForm user={user} />;
>>>>>>> 8f9f769 (v1)
}