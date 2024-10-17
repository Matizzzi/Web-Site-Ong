import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormularioAuth = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Inicia sesion</h1>
        <p className="text-sm text-muted-foreground">
          Introduce tu correo y contraseña para ingresar
        </p>

        <form>
          <div className="grid gap-2">
            <div className="mb-3">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                placeholder="nombre@gmail.com"
                type="email"
                autoComplete="email"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormularioAuth;
