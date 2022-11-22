@error($name)
    <p
        {{ $attributes->class(['validation-error'])->merge()}}>
        {{ $message }}</p>
@enderror
