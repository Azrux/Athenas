import { Button, Input } from "@nextui-org/react";

const SignUpForm = () => {
	// TODO: Add functionality
	return (
		<section id="register" className="py-12 px-2 bg-gray-100">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-6">Únete a Nuestro Club</h2>
				<form className="max-w-md mx-auto">
					<Input
						type="text"
						label="Nombre"
						placeholder="Ingresá tu nombre"
						className="block w-full mb-4"
						variant="faded"
						color="secondary"
					/>
					<div className="flex w-full flex-wrap md:flex-nowrap gap-4">
						<Input
							type="email"
							label="Email"
							placeholder="Ingresá tu email"
							className="block w-full mb-4"
							variant="faded"
							color="secondary"
						/>
					</div>
					<Input
						type="tel"
						label="Teléfono"
						placeholder="Ingresá tu teléfono"
						className="block w-full mb-4"
						variant="faded"
						color="secondary"
					/>
					<Button color="secondary" className="shadow-md" size="lg">
						Regístrate Ahora
					</Button>
				</form>
			</div>
		</section>
	);
};

export default SignUpForm;