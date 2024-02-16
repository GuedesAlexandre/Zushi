<?php

declare(strict_types=1);

namespace Doctrine\ORM\Mapping;

/**
 * @deprecated Named queries won't be supported in ORM 3.
 *
 * @Annotation
 * @Target("ANNOTATION")
 */
final class NamedQuery implements MappingAttribute
{
    /** @var string */
    public $name;

    /** @var string */
    public $query;
}
