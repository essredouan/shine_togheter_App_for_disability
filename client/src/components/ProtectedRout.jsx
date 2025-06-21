import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get('/users/me');  // API endpoint لجلب بيانات المستخدم الحالي
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    // ما كاينش user => نوجهه لل login
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    // هذا مسموح فقط للأدمن، والمستخدم ليس أدمن => نوجهه لل dashboard العادي أو صفحة اخرى
    return <Navigate to="/dashboard" replace />;
  }

  // إذا تحقق كلشي، نعرض المحتوى
  return children;
}
