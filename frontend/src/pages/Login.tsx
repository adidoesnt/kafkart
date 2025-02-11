"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { useAuth } from "../context/auth";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string().min(8).max(50),
});

function Login() {
	const { login } = useAuth();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = useCallback(
		({ username, password }: z.infer<typeof formSchema>) => {
			login(username, password);
		},
		[login],
	);

	return (
		<div className="text-gray-200 bg-gray-900 flex w-full h-full flex-col items-center justify-center p-8 rounded-lg gap-8">
			<div className="flex flex-col w-full justify-center items-center gap-2">
				<h1 className="text-2xl font-bold">KafKaRT</h1>
				<p className="text-sm">
					A Solace-based mock e-commerce application.
				</p>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										className="border-gray-300"
										placeholder="kafkart"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your public display name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										className="border-gray-300"
										type="password"
										placeholder="••••••••"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your secret password.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex w-full justify-center">
						<Button className="bg-gray-200 hover:bg-gray-400 text-gray-900" type="submit">Login</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default Login;
