import { use, createContext, type PropsWithChildren, useEffect, useState } from "react";
import { Session } from '@supabase/supabase-js';
import { supabase } from "@/lib/supabase";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<{ error?: any; session?: Session | null }>;
  resetPassword: (email: string) => Promise<{ error?: any }>;
  session: Session | null;
  user: Session['user'] | null;
  isLoading: boolean;
}>({
  signIn: async () => ({ error: null }),
  signOut: async () => {},
  signUp: async () => ({ error: null }),
  resetPassword: async () => ({ error: null }),
  session: null,
  user: null,
  isLoading: true,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const signUp = async (email: string, password: string) => {
    const { data: { session }, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { error, session };
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'your-app://reset-password',
    });
    return { error };
  };

  return (
    <AuthContext
      value={{
        signIn,
        signOut,
        signUp,
        resetPassword,
        session,
        user: session?.user || null,
        isLoading,
      }}
    >
      {children}
    </AuthContext>
  );
}
